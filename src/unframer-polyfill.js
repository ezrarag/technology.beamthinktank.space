// Comprehensive polyfill for unframer exports that are missing
import React from 'react';

// Mock SmartComponentScopedContainer as a simple div wrapper
export const SmartComponentScopedContainer = React.forwardRef(({ children, ...props }, ref) => {
  return React.createElement('div', { ref, ...props }, children);
});

SmartComponentScopedContainer.displayName = 'SmartComponentScopedContainer';

// Mock all the missing exports with simple implementations
export const MotionConfigContext = React.createContext({});

// motion should be a function that wraps components
export const motion = (Component) => {
  if (typeof Component === 'string') {
    // For HTML elements like 'div', 'span', etc.
    return React.forwardRef(({ children, ...props }, ref) => {
      return React.createElement(Component, { ref, ...props }, children);
    });
  } else {
    // For React components
    return React.forwardRef(({ children, ...props }, ref) => {
      return React.createElement(Component, { ref, ...props }, children);
    });
  }
};
export const LayoutGroup = React.forwardRef(({ children, ...props }, ref) => {
  return React.createElement('div', { ref, ...props }, children);
});
export const Link = React.forwardRef(({ children, ...props }, ref) => {
  return React.createElement('a', { ref, ...props }, children);
});
export const Image = React.forwardRef(({ src, alt, ...props }, ref) => {
  return React.createElement('img', { ref, src, alt, ...props });
});
export const RichText = React.forwardRef(({ children, ...props }, ref) => {
  return React.createElement('div', { ref, ...props }, children);
});
export const SVG = React.forwardRef(({ children, ...props }, ref) => {
  return React.createElement('svg', { ref, ...props }, children);
});
export const Data = React.forwardRef(({ children, ...props }, ref) => {
  return React.createElement('div', { ref, ...props }, children);
});
export const ComponentViewportProvider = React.forwardRef(({ children, ...props }, ref) => {
  return React.createElement('div', { ref, ...props }, children);
});
export const ResolveLinks = React.forwardRef(({ children, ...props }, ref) => {
  return React.createElement('div', { ref, ...props }, children);
});
export const ContextProviders = React.forwardRef(({ children, ...props }, ref) => {
  return React.createElement('div', { ref, ...props }, children);
});
export const WithFramerBreakpoints = React.forwardRef(({ children, ...props }, ref) => {
  return React.createElement('div', { ref, ...props }, children);
});

// Mock hooks
export const useLocaleInfo = () => ({ locale: 'en' });
export const useVariantState = () => ({ variant: 'default' });
export const useComponentViewport = () => ({ isInViewport: true });
export const useActiveVariantCallback = () => () => {};
export const useOnVariantChange = () => () => {};
export const useRouter = () => ({ push: () => {}, replace: () => {} });
export const useObserveData = () => ({ data: {} });

// Mock utility functions
export const cx = (...classes) => classes.filter(Boolean).join(' ');
export const withCSS = (Component) => Component;
export const addPropertyControls = () => {};
export const addFonts = () => {};
export const getFontsFromSharedStyle = () => [];
export const getFonts = () => [];
export const getLoadingLazyAtYPosition = () => 0;
export const optimizeAppear = () => {};
export const withFX = (Component) => Component;

// Mock control types
export const ControlType = {
  String: 'string',
  Number: 'number',
  Boolean: 'boolean',
  Color: 'color',
  File: 'file',
  Image: 'image',
  URL: 'url',
  Enum: 'enum',
  Array: 'array',
  Object: 'object',
  Function: 'function'
};

// Mock font store
export const fontStore = {
  addFont: () => {},
  getFont: () => null,
  loadFonts: () => Promise.resolve()
};

// Re-export everything from unframer
export * from 'unframer';
