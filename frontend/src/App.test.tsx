import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('The main app', () => {
  it('renders the header', () => {
    render(<App />);
    expect(screen.getByText('Orders')).toBeInTheDocument();
  });

  it('should render the Payment link', () => {
    render(<App />);
    expect(screen.getByText("Payment")).toBeInTheDocument();
  });
  
  it('should render the Home link', () => {
    render(<App />);
    //expect(screen.getAllByText('Home')).toBeInTheDocument();
    expect(screen.getByRole('Link', { name: "home"} )).toBeInTheDocument();
  });

  it('should render the Home header', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 2})).toBeInTheDocument();
  });


});