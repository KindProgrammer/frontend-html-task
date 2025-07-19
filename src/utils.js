const getReverseDelay = (index, total) => {
    const baseDelay = 0.1;
    return (total - index - 1) * baseDelay;
  };

export default getReverseDelay;