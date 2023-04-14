
export const WebsocketProvider = ({ children }) => {

  const token = localStorage.getItem('token');

  return (
    <WebsocketContext.Provider value={{ websocket, addToken }}>
      {children}
    </WebsocketContext.Provider>
  );
};