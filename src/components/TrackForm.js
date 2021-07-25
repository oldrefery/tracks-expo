import React, { useContext } from "react";
import { Button, Input } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";

const TrackForm = () => {
  const {
    state: { name, isRecording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  const titleButton = isRecording ? "Stop" : "Start recording";

  const handleStartRecord = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  return (
    <>
      <Spacer>
        <Input
          value={name}
          onChangeText={changeName}
          placeholder={"Enter name"}
        />
      </Spacer>
      <Spacer>
        <Button title={titleButton} onPress={handleStartRecord} />
      </Spacer>
      {!isRecording && locations.length ? (
        <Spacer>
          <Button title={"Save recording"} />
        </Spacer>
      ) : null}
    </>
  );
};

export default TrackForm;
