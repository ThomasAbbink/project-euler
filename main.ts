if (import.meta.main) {
  const args = Deno.args;
  if (args.length > 0) {
    console.log(`Running problem ${args[0]}`);
    await runProblem(`${args[0]}.ts`);
  } else {
    await runAllProblems();
  }
}

type Problem = {
  name: string;
  main: () => number | bigint;
};

export function logResult(name: string, result: number | bigint): void {
  console.log(`${name}: ${result}`);
}

export async function runAllProblems(): Promise<void> {
  const problemNames = Deno.readDir("./src/problems");

  for await (const problemName of problemNames) {
    console.log(`Running problem ${problemName.name}`);
    await runProblem(problemName.name);
  }
}

export async function runProblem(name: string): Promise<void> {
  const problem = await loadProblem(name);
  if (problem) {
    logResult(name.replace(".ts", ""), problem.main());
  }
}

export async function loadProblem(name: string): Promise<Problem | null> {
  try {
    return await import(`./src/problems/${name}`);
  } catch (error) {
    console.error(`Error loading problem ${name}: ${error}`);
    return null;
  }
}
