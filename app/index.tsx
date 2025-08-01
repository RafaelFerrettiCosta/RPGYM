import { Text, View, StyleSheet, Image} from "react-native";
import { Link } from "expo-router";
import GridButton from "../components/GridButton";
import notesImg from "../assets/images/notes.png";

export default function DevMenu() {
  return (
    <>
    <View
      style={styles.container}
      >

      <View style={styles.item}>
      <Link href="/userDetails" style={styles.link}>
       <GridButton buttonTitle="Detalhes do Usuário" buttonImg={notesImg}/>
      </Link>
      </View>
      
      <View style={styles.item}>
      <Link href="/userDetails" style={styles.link}>
       <GridButton buttonTitle="Detalhes do Usuário" buttonImg={notesImg}/>
      </Link>
      </View>

      <View style={styles.item}>
      <Link href="/userDetails" style={styles.link}>
       <GridButton buttonTitle="Detalhes do Usuário" buttonImg={notesImg}/>
      </Link>
      </View>

      <View style={styles.item}>
      <Link href="/userDetails" style={styles.link}>
       <GridButton buttonTitle="Detalhes do Usuário" buttonImg={notesImg}/>
      </Link>
      </View>

    </View>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    // backgroundColor: "#fff",
    alignItems: "flex-start",
    paddingTop: 10,
    gap: 10,
    justifyContent: "space-between",
  },

  title: {
    fontSize: 18,
    alignSelf: "center",
    paddingVertical: 20,
    fontWeight: "bold",
  },

  item: {
    width: '48%',
    backgroundColor: "#fff",
  },

  link: {
    color: "#18a32a",
    fontSize: 16,
    fontWeight: "bold",
  }
});
