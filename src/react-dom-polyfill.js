// Polyfill for React DOM exports that unframer expects
import * as ReactDOM from 'react-dom';
import React from 'react';

// Mock the missing exports that unframer 3.2.1 expects
if (!ReactDOM.prefetchDNS) {
  ReactDOM.prefetchDNS = () => {};
}

if (!ReactDOM.preconnect) {
  ReactDOM.preconnect = () => {};
}

export * from 'react-dom';
