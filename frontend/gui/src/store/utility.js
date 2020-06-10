export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties,
    }
}
//replace all the keys/values in oldObject by updatedProperties
