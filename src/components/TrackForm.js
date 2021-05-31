import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";

const TrackForm = () => {
  const {
    state: { recording, name },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  return (
    <>
      <Input
        value={name}
        onChangeText={(newValue) => changeName(newValue)}
        label="Track Name"
        placeholder="Type your track name here"
      />
      <Spacer>
        {recording ? (
          <Button title="Stop" onPress={() => stopRecording()} />
        ) : (
          <Button title="Start Recording !" onPress={() => startRecording()} />
        )}
      </Spacer>
    </>
  );
};

export default TrackForm;
