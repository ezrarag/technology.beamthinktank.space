// Polyfill for unframer exports that are missing
import React from 'react';

// Mock SmartComponentScopedContainer as a simple div wrapper
export const SmartComponentScopedContainer = React.forwardRef(({ children, ...props }, ref) => {
  return React.createElement('div', { ref, ...props }, children);
});

SmartComponentScopedContainer.displayName = 'SmartComponentScopedContainer';

// Re-export everything from unframer
export * from 'unframer';
