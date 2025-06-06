import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    label: {
        fontSize: 14,
        color: '#374151',
        fontWeight: '600',
        marginBottom: 6,
      },
      input: {
        backgroundColor: '#F9FAFB',
        borderRadius: 12,
        padding: 14,
        fontSize: 15,
        color: '#111827',
      },
      button: {
        backgroundColor: '#10B981',
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 12,
        marginTop: 32,
      },
      buttonText: {
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 16,
      },
      title: {
        fontSize: 22,
        fontWeight: '700',
        color: '#1F2937',
        fontFamily: 'Rubik_700Bold',
      },
      
      subtitle: {
        fontSize: 14,
        color: '#6B7280',
        marginTop: 4,
        fontFamily: 'Rubik_400Regular',
      },
})