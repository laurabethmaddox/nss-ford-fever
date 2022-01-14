const createChassis = () => {
	// Create a new object. No properties yet.
	const newChassisObject = {	}

	return newChassisObject
}

let chassis = createChassis()
console.log(chassis)

const addBody = (chassisObject) => {
	chassisObject.body = "Fever"

	return chassisObject
}

let chassisWithBody = addBody(chassis)
console.log(chassisWithBody)

const addWheels = (chassisWithBody) => {
    chassisWithBody.wheels = 4

    return chassisWithBody
}

let chassisWithWheels = addWheels(chassisWithBody)
console.log(chassisWithWheels)

const addEngine = (chassisWithWheels) => {
    chassisWithWheels.engine = "4.8L"

    return chassisWithWheels
}

let chassisWithEngine = addEngine(chassisWithWheels)
console.log(chassisWithEngine)

const addSteeringWheel = (chassisWithEngine) => {
    chassisWithEngine.steeringWheel = "Tilting"

    return chassisWithEngine
}

let chassisWithSteeringWheel = addSteeringWheel(chassisWithEngine)
console.log(chassisWithSteeringWheel)

const addDriveTrain = (chassisWithSteeringWheel) => {
    chassisWithSteeringWheel.driveTrain = "Two wheel drive"

    return chassisWithSteeringWheel
}

let chassisWithDriveTrain = addDriveTrain(chassisWithSteeringWheel)
console.log(chassisWithDriveTrain)