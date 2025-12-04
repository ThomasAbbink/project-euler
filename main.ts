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

async function getAllFileNames() {
  const names = [];
  const dirEntries = Deno.readDir("./src/problems");
  for await (const entry of dirEntries) {
    names.push(entry.name);
  }
  return names.sort((a, b) => {
    const aNumber = Number.parseInt(a.replace(".ts", ""));
    const bNumber = Number.parseInt(b.replace(".ts", ""));
    return aNumber - bNumber;
  });
}

export async function runAllProblems(): Promise<void> {
  const fileNames = await getAllFileNames();

  for (const name of fileNames) {
    await runProblem(name);
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
