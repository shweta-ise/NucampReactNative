<Modal>
                animationType={'slide'}
                transparent={false}
                visible={this.state.showModal}
                onRequestClose={() => this.toggleModal()}
                
                <View>
                <View>
                <Button
                            onPress={() => {
                                this.toggleModal();
                                
                            }}
                            color='#808080'
                            title='Cancel'
                 />

                </View>
                </View>


                </Modal>

                return {...state, comments:state.comments.concat(comment)}