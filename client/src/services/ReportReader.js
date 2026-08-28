import GcgReader from './GcgReader';
import MacondoReader from './MacondoReader';

const isMacondoReport = (data) => data !== null && typeof data === 'object' && Array.isArray(data.turns);

class ReportReader {
  readReport = (e, callback) => {
    const file = e.target.files[0];
    if (!file) return 0;
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      let json = null;
      try {
        json = JSON.parse(text);
      } catch (error) {
        json = null;
      }
      const movesArray = isMacondoReport(json) ? new MacondoReader().convert(json) : new GcgReader().convertFromText(text);
      callback(movesArray);
    };
    reader.readAsText(file);
  };
}

export default ReportReader;
