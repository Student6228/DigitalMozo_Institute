$localNodePath = Join-Path $PSScriptRoot ".tools\node"
$localNodeExecutable = Join-Path $localNodePath "node.exe"

if (-not (Test-Path -LiteralPath $localNodeExecutable)) {
    throw "Local Node.js was not found at $localNodeExecutable"
}

$env:Path = "$localNodePath;$env:Path"
$env:npm_config_cache = Join-Path $PSScriptRoot ".npm-cache"

Write-Output "Local Node.js environment activated."
Write-Output "Node: $(node --version)"
Write-Output "npm:  $(npm --version)"

