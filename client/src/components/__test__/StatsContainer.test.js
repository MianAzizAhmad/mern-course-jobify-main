import React from 'react';
import StatsContainer from './../StatsContainer';
import "@testing-library/jest-dom/extend-expect"
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore([]);

describe('StatsContainer Test Case { ', ()=>{

    let store;
    let component;

    it(' Snap 1 }', ()=>{

        store = mockStore({pending: "1", declined: "1", interview: "1"});
        const tree = renderer.create(<StatsContainer ></StatsContainer>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it(' Snap 2 }', ()=>{

        store = mockStore();
        const tree = renderer.create(<StatsContainer ></StatsContainer>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it(' Snap 3 }', ()=>{

        store = mockStore({pending: "3", declined: "3", interview: "3"});
        const tree = renderer.create(<StatsContainer ></StatsContainer>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});