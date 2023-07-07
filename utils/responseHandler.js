exports.successResponse = (message, payload) => {
  return {
      status: true,
      message: message,
      data: payload
  }
}
