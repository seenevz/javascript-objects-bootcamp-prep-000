var playlist = { artista : "musica" };

function updatePlaylist(playlist, artistName, songTitle) {
  playlist [artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  playlist.delete(artistName)
  return playlist
}
