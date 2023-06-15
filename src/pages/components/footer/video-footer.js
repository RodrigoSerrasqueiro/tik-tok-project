import React from 'react'
import "./video-footer.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter() {
  return (
    <div className='videoFooter'>
      <div className='videoFooter__text'>
        <h3>@Rodrigo Serrasqueiro</h3>
        <p>Descrição do vídeo</p>
        <div className='videoFooter__music'>
          <MusicNoteIcon />
          <div className='videoFooterMusic__text'>
            <p>Título da música</p>
          </div>
        </div>
      </div>
      <img 
        className='videoFooter__record' 
        src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z' 
        alt='ícone vinil'
      />
    </div>
  )
}

export default VideoFooter