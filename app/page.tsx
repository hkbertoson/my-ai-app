'use client';
import {useChat} from 'ai/react';

export default function Chat() {
	const {messages, input, handleInputChange, handleSubmit} = useChat();
	return (
		<>
			<div className="mx-auto max-w-md p-6 bg-white rounded-lg shadow-lg flex flex-col justify-between h-screen">
				<div className="mb-8">
					{messages.map((m) => (
						<div
							key={m.id}
							className={`mb-2 ${
								m.role === 'user' ? 'text-blue-600' : 'text-green-600'
							}`}
						>
							<strong>{m.role === 'user' ? 'User: ' : 'AI: '}</strong>
							{m.content}
						</div>
					))}
				</div>

				<form onSubmit={handleSubmit} className="flex items-center">
					<input
						className="flex-1 mr-2 py-2 px-4 border border-gray-300 rounded focus:outline-none focus:border-blue-400 text-black"
						type="text"
						value={input}
						onChange={handleInputChange}
						placeholder="Say something..."
					/>
					<button
						type="submit"
						className="py-2 px-6 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
					>
						Send
					</button>
				</form>
			</div>
		</>
	);
}
