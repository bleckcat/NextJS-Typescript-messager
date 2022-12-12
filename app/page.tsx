import React from 'react';
import ChatInput from './ChatInput';
import MessageList from './MessageList';

async function HomePage() {
  return (
    <main>
      <MessageList />
      <ChatInput />
    </main>
  );
}

export default HomePage;
