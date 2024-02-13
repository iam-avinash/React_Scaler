export default function UserProfile(props) {
  //   console.log(props);
  //   console.log(props.name);
  //   console.log(props.age);
  //   console.log(props.place);
  let { name, age, place } = props;
  return (
    <div className="nam">
      <h1 className="Title">
        I am {name} of age {age} living in {place}
      </h1>
    </div>
  );
}
