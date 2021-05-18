module.exports = {
  note: async (parent, args, { models }) => {
    return await models.Note.findById(args.id);
  },
  notes: async(parent, args, { models }) => {
    return await models.Note.find();
  }
}