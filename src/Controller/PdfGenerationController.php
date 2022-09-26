<?php

namespace App\Controller;

use App\Entity\TankGeometryData;
use App\Form\TankGeometryDataType;
use Dompdf\Dompdf;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PdfGenerationController extends AbstractController
{
  #[Route('/make-report', name: 'make_report', methods: ['POST'])]
  public function index(Request $request): Response
  {
    $data = json_decode($request->getContent(), true);
    $chunks = array_chunk($data, 2, true);
    $renderedView = $this->renderView('report.html.twig', [
      'chunks' => $chunks,
    ]);
    $dompdf = new Dompdf();
    $dompdf->loadHtml($renderedView);
    $dompdf->setPaper('A4', 'portrait');
    $dompdf->render();
    $dompdf->stream("dompdf_out.pdf");
  }
}
