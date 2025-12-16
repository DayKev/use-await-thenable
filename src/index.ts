import { BaseSequencer, type TestSpecification } from "vitest/node";

export class MySequencer extends BaseSequencer {
	// cf https://github.com/vitest-dev/vitest/blob/6497bb2608f544e38fdbb91da5d93314ad01583b/packages/vitest/src/node/sequencers/BaseSequencer.ts#L35
	override async sort(files: TestSpecification[]): Promise<TestSpecification[]> {
		files = await super.sort(files); // inferring the wrong type for `super.sort`?

		return super.sort(files); // unrelated code removed
	}
}

async function fn(): Promise<TestSpecification[]> {
	return [];
}

await fn(); // no error, same type signature
