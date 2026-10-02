import { View, FlatList, StyleSheet } from 'react-native';
import { Menu } from '../components/Menu';
import { MovieCard } from '../components/MovieCard';
import { movies } from '../data/movies';

export default function Catalogo() {
  return (
    <View style={styles.container}>
      <Menu active="list" />

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <MovieCard
            name={item.name}
            genres={item.genres}
            year={item.year}
            image={item.image}
            rate={item.rate}
            favorite={item.favorite}
            general_review={item.general_review}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  lista: { padding: 16 },
});