import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import TileSquare from '../TileSquare';


const renderTileSquare = (element) => render(
    <div data-testid="root">
        {element}
    </div>
);
describe('TileSquare', () => {
    it('renders main TileSquare with correct styles', () => {
        const { getByTestId } = renderTileSquare(<TileSquare />);
        expect(getByTestId("root").firstChild).toHaveStyle("background-color: #f8e8c7");
    })

    it('renders blank with correct styles', () => {
        const { getByTestId } = renderTileSquare(<TileSquare blank />);
        expect(getByTestId("root").firstChild).toHaveStyleRule('color', "#015b5266")
    })

    it('renders empty spaces with correct styles', () => {
        const { getByTestId } = renderTileSquare(<TileSquare transparent />);
        expect(getByTestId("root").firstChild).toHaveStyleRule('opacity', "0")
    })

    it('renders played tiles with correct styles', () => {
        const { getByTestId } = renderTileSquare(<TileSquare played />);
        expect(getByTestId("root").firstChild).toHaveStyleRule('background-color', "#1ae825")
    })
});
