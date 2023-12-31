export enum steps {
	initial = 1,
	setConfigs = 2,
	editQuestions = 3,
	finished = 4
}

export enum gameStatus {
	initial = 1,
	selectQuestionGroup = 2,
	Questioning = 3,
	ShowAnswer = 4,
	ShowResult = 5,
	FinalResult = 6
}

enum questionType {
	select = 1,
	shortAnswer = 2,
	quickAnswer = 3
}

type question = {
	title: string;
	id: number;
	defaultScore: number;
	type: questionType;
	options?: string[];
	answer: string | number; // 待確認是否使用
};

export type questionsData = {
	groups: {
		title: string;
		id: number;
		questions: question[];
	}[];
};

export type boardData = {
	currentQuestion: question;
	currentScore: { [id: string]: number };
};
