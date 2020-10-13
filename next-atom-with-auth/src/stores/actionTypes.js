export const generateAction = action => {
  const types = {
    get: "GET_ALL",
    detail: "GET_DETAIL",
    add: "ADD",
    update: "UPDATE",
    delete: "DELETE",
    reindex: "REINDEX",
    search: "SEARCH",
    reset: "RESET",
    approve: "APPROVE",
    decline: "DECLINE"
  };

  return type => {
    const actionType = type.toLowerCase();
    if (types[actionType]) return `${types[actionType]}_${action}`;
    else return "UNKNOWN_ACTION";
  };
};

export const userAction = generateAction("USER");
