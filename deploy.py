#!/usr/bin/env python3
import subprocess
import sys

BASE_HREF = "/songbook/"

def run(cmd: list[str]):
    print(">", " ".join(cmd))
    subprocess.run(cmd, check=True)

def main():
    message = " ".join(sys.argv[1:]) or "build"

    run(["flutter", "build", "web", "--release", "--base-href", BASE_HREF])

    run(["git", "add", "-A"])

    try:
        run(["git", "commit", "-m", message])
    except subprocess.CalledProcessError:
        print("Nothing to commit")

    run(["git", "push"])

if __name__ == "__main__":
    main()
