import { useState, useEffect } from 'react'

export default function seRotatingText(
  phrases: string[],
  pauseDuration: number, // Duration to pause on each phrase
  iterations: number // Total number of iterations to rotate
) {
  const [text, setText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count < iterations) {
      // Set the current phrase based on the index
      setText(phrases[phraseIndex])

      // Set a timeout to change the phrase after the pauseDuration
      const timeout = setTimeout(() => {
        const nextPhraseIndex = (phraseIndex + 1) % phrases.length
        setPhraseIndex(nextPhraseIndex)

        // If we've gone through all phrases, increment the count
        if (nextPhraseIndex === 0) {
          setCount(count + 1)
        }
      }, pauseDuration)

      // Cleanup the timeout if the component is unmounted
      return () => clearTimeout(timeout)
    } else {
      // If we've hit the iteration limit, keep the text at the first phrase
      setText(phrases[0])
    }
  }, [phraseIndex, count, phrases, pauseDuration, iterations])

  return text
}
