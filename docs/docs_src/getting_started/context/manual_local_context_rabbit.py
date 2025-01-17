from faststream import Context, FastStream, apply_types, context
from faststream.rabbit import RabbitBroker
from faststream.rabbit.annotations import RabbitMessage

broker = RabbitBroker("amqp://guest:guest@localhost:5672/")
app = FastStream(broker)


@broker.subscriber("test-queue")
async def handle(
    msg: str,
    message: RabbitMessage,
):
    context.set_local("correlation_id", message.correlation_id)
    call()


@apply_types
def call(
    message: RabbitMessage,
    correlation_id=Context(),
):
    assert correlation_id == message.correlation_id
    context.reset_local("correlation_id")
