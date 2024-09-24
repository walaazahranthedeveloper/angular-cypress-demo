import 'zone.js';  // Included with Angular
import 'zone.js/testing';  // Included with Angular for testing
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// Manually import all spec files
import './app/todo-list/todo-list.component.spec';
// Add more imports for other spec files if needed
