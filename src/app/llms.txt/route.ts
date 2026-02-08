export const runtime = "nodejs";

// A small, LLM-friendly index of what this project is.
// Inspired by https://llmstxt.org (informal convention).

export async function GET() {
  const text = `# My Memory

My Memory is an open-source desktop app that provides semantic search across your notes.
Supported sources: Apple Notes (macOS), Obsidian, Notion, local files.

## Links
- Main repo: https://github.com/ShubhenduVaid/my-memory
- Releases: https://github.com/ShubhenduVaid/my-memory/releases
- Docs index: https://github.com/ShubhenduVaid/my-memory/tree/master/docs
- Security notes: https://github.com/ShubhenduVaid/my-memory/blob/master/SECURITY.md

## Quickstart (from source)
1. git clone https://github.com/ShubhenduVaid/my-memory
2. cd my-memory
3. npm install
4. cp .env.example .env
5. set GEMINI_API_KEY (or OPENROUTER_API_KEY)
6. npm start

## Privacy
Local-first: notes are indexed locally. Depending on LLM provider, query/snippets may be sent to the provider.
For best privacy, use a local provider (e.g. Ollama).
`;

  return new Response(text, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
