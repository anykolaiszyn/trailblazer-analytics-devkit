# PowerShell script template for this project
# Always include this exception handling for unsigned scripts
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

# Now run your command, for example:
pnpm run dev

# If you see an error like:
# "File ...\pnpm.ps1 cannot be loaded. The file ...\pnpm.ps1 is not digitally signed."
# This means the execution policy is still blocking scripts. Make sure you run Set-ExecutionPolicy in the same session before your command.
