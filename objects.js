var playlist = { artista : "musica" };

function updatePlaylist(playlist, artistName, songTitle) {
  playlist [artistName] = songTitle
  return playlist
}

function removeFromPlaylist(artistName) {
  delete playlist.artistName
  return playlist
}
