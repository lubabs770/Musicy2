const chooseWorkingDir = async () => {
  try {
    const handle = await window.showDirectoryPicker();
    const dirs = [];
    for await (const [name, entry] of handle.entries())
      if (entry.kind === 'directory') dirs.push(name);
    setWorkingDir(handle);
    setArtists(dirs);
  } catch {}
};
