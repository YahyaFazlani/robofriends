const Scroll = ({ children }) => {
  return <div style={{overflowY: 'scroll', height: '560px'}}>{children}</div>;
};

export default Scroll;
