// module.exports.movieNameSearch  = async (payload) => {
//     const { q } = payload;
    
//     try{
//         let suggestions = await Movie.findAll({ where: { name: { [Op.iLike]: '%' + q + '%' } }})
//         return suggestions

//     } catch(e) {
//         console.error(e);
//         return { message: 'Authentication failed.'}
//     }
    
// }