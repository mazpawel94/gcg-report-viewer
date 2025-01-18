import styled from 'styled-components';
import { EGameStatus, IApprovedMove, useGameEntryContext } from '../../../contexts/GameEntryContext';

const StyledWrapper = styled.div`
  width: 200px;
  height: 38px;
  display: flex;
  flex-direction: column;
  font-size: 14px;

  h3 {
    margin-bottom: 0px;
  }
`;

const MoveDetails = styled.div`
  letter-spacing: 0.6px;
`;

const CurrentMoveInfo = ({ newMoveInfo }: { newMoveInfo: IApprovedMove | null }) => {
  const { gameStatus } = useGameEntryContext();

  if (gameStatus !== EGameStatus.filled) return <StyledWrapper />;

  return (
    <StyledWrapper>
      <h3>User 1</h3>
      {newMoveInfo ? (
        <MoveDetails>
          {newMoveInfo.coordinates} | {newMoveInfo.points} pkt
        </MoveDetails>
      ) : null}
    </StyledWrapper>
  );
};

export default CurrentMoveInfo;
