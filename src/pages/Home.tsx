import { useState } from 'react'
import Modal from '../components/Modal'

function Home() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Open Modal
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-xl font-semibold mb-2">Edit Case Model</h2>
        <p className="mb-4">This is a modal for editing or confirming actions.</p>
        <button
          onClick={() => setIsOpen(false)}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Confirm
        </button>
      </Modal>
    </div>
  )
}

export default Home