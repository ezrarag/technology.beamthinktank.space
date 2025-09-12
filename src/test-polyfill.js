// Test the unframer polyfill
import React from 'react';
import { fontStore, motion, SmartComponentScopedContainer } from './unframer-polyfill';

console.log('Testing polyfill...');
console.log('fontStore:', typeof fontStore);
console.log('fontStore.loadFonts:', typeof fontStore.loadFonts);
console.log('motion:', typeof motion);
console.log('SmartComponentScopedContainer:', typeof SmartComponentScopedContainer);

// Test if loadFonts is callable
try {
  fontStore.loadFonts();
  console.log('✅ fontStore.loadFonts() works');
} catch (error) {
  console.error('❌ fontStore.loadFonts() failed:', error);
}

// Test if motion is callable
try {
  const MotionDiv = motion('div');
  console.log('✅ motion("div") works:', typeof MotionDiv);
  
  const MotionFragment = motion(React.Fragment);
  console.log('✅ motion(React.Fragment) works:', typeof MotionFragment);
} catch (error) {
  console.error('❌ motion() failed:', error);
}

