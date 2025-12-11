Get-ChildItem -Path project -Force -Exclude node_modules | ForEach-Object {
  if ($_.PSIsContainer) {
    Copy-Item -Path $_.FullName -Destination ".\$($_.Name)" -Recurse -Force -ErrorAction SilentlyContinue
    Write-Host "Copied directory: $($_.Name)"
  } else {
    Copy-Item -Path $_.FullName -Destination ".\$($_.Name)" -Force
    Write-Host "Copied file: $($_.Name)"
  }
}
Write-Host "All files copied successfully"
