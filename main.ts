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
  main: () => number;
};

export function logResult(
  name: string,
  result: number | bigint | string
): void {
  console.log(`${name}: ${result}`);
}

export async function runAllProblems(): Promise<void> {
  const dirEntries = Deno.readDir("./src/problems");

  const names = [];
  for await (const entry of dirEntries) {
    names.push(entry.name);
  }
  names.sort().forEach((name) => {
    runProblem(name);
  });
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
