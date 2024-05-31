import ClassRoom from "./0-classroom";

export default function initializeRooms() {    
    let ClassRoom1 = new ClassRoom(19);
    let ClassRoom2 = new ClassRoom(20);
    let ClassRoom3 = new ClassRoom(34);
    let aary = [ClassRoom1, ClassRoom2, ClassRoom3];
    return aary;
}
