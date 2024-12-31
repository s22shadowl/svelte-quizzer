import { writable } from 'svelte/store';
import { gameStatus, Mode2AnsweringStatus } from '../../constants';

export const status = writable(gameStatus.initial);

export const playersData = writable<
	{ id: string; score: number; currentAnswer: string; index: number }[]
>([]);

export const answeringStatus = writable(true);
export const answeringStatus2 = writable<Mode2AnsweringStatus>(Mode2AnsweringStatus.selectQuestion);
export const finishedQuestionIDs = writable<number[]>([]);

export const currentGroupIndex = writable(0);
export const currentPlayerIndex = writable(0);
export const currentQuestionIndex = writable(0);
