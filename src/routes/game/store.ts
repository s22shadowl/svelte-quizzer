import { writable } from 'svelte/store';
import { gameStatus } from '../../constants';

export const status = writable(gameStatus.initial);

export const playersData = writable<{ id: string; score: number; currentAnswer: string }[]>([]);

export const answeringStatus = writable(true);

export const currentGroupIndex = writable(0);

export const currentQuestionIndex = writable(0);
