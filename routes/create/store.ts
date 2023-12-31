import { writable } from 'svelte/store';
import { steps } from '../../constants';

export const status = writable(steps.initial);
