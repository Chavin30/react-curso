import React from 'react'

const SongLyrics = ({title,lyrics}) => {
  return (
    <section>
        <h2>{title}</h2>
        <blockquote style={{whiteSpace:"pre-warp"}}>{lyrics}</blockquote>
    </section>
  )
}

export default SongLyrics