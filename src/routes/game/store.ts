import { writable } from 'svelte/store';
import { gameStatus } from './constants';

export const status = writable(gameStatus.initial);
