from rest_framework.routers import DefaultRouter
from .views import (
    RoomViewSet,
    QuestionViewSet,
    ParticipantViewSet,
    AnswerViewSet,
)

router = DefaultRouter()
router.register(r'rooms', RoomViewSet)
router.register(r'questions', QuestionViewSet)
router.register(r'participants', ParticipantViewSet)
router.register(r'answers', AnswerViewSet)

urlpatterns = router.urls