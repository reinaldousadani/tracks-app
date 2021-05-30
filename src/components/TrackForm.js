import React from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";

const TrackForm = () => {
  return (
    <>
      <Input label="Track Name" placeholder="Type your track name here" />
      <Spacer>
        <Button title="Start Recording !" />
      </Spacer>
    </>
  );
};

export default TrackForm;
